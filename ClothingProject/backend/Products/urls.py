from django.urls import path
from . import views


urlpatterns = [
    path('Shop/',views.products_list),
    path('Shop/<str:pk>/',views.products_detail, name="product"),
  #  path('Bag/',views.orders_list),
   # path('hello/', views.HelloView.as_view(), name ='hello'),
   # path('Bag/<str:pk>/',views.orders_detail)
]
