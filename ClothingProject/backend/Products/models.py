from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager



# Create your models here.
class products(models.Model):
    name = models.CharField(max_length=30)
    price = models.DecimalField(default=0,decimal_places=2,max_digits=5)
    description = models.CharField(max_length=250, default='', blank=True,null=True)
    image = models.CharField(max_length=10000)
    qty = models.IntegerField()
   



class cart(models.Model):
    total_price = models.DecimalField(max_digits=7, decimal_places=2)


class cartitem(models.Model):
    item = models.ForeignKey(products, on_delete=models.CASCADE)
    cart = models.ForeignKey(cart, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()


class MyUserManager(BaseUserManager):
    def create_user(self, email, name, password=None, password2=None):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            name=name,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, password=None):
        user = self.create_user(
            email,
            password=password,
            name=name,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user



class MyUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(
        verbose_name='Email',
        max_length=255,
        unique=True,
    )
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    cart = models.OneToOneField(cart, on_delete=models.CASCADE, blank=True, null=True)
    objects = MyUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin





