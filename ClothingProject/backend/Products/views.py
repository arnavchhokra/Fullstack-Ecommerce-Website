
from .models import *
from .serializers import *
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework import renderers
from rest_framework import permissions



def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }



class UserRegistrationView(APIView):
    def post(self,request,format=None):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            token = get_tokens_for_user(user)
            return Response({'token':token,'msg':'Registration Success'},status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)


class UserLoginView(APIView):
    def post(self, request, format=None):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            user = authenticate(password=password, email=email)
            if user is not None:
                token = get_tokens_for_user(user)
                return Response({'token':token,"msg": "Login Successful"}, status=status.HTTP_200_OK)
            else:
                return Response(
                    {
                        "errors": {
                            "non_field_errors": ["Email or Password is not valid"]
                        }
                    },
                    status=status.HTTP_404_NOT_FOUND
                )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 
class UserProfileView(APIView):
    def get(self,request,format=None):
        serializer = UserProfileSerializer(request.user)
        if(request.user.is_authenticated):
        #permission_classes = [IsAuthenticated]
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'error':'Not authenticated'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def products_list(request):
    products_v = products.objects.all()
    serializer = productsSerializer(products_v,many=True)
    return Response(serializer.data)



@api_view(['GET'])
def products_detail(request,pk):
    products_v = get_object_or_404(products,pk=pk)
    serializer = productsSerializer(products_v)
    return Response(serializer.data)




        


# Create your views here.
