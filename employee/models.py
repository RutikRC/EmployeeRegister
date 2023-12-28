from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Employee(models.Model):
    name = models.CharField(max_length=255)
    contact = models.CharField(max_length=15)
    email = models.EmailField(max_length=255)
    aadhar_number = models.CharField(max_length=255)
    pan_number = models.CharField(max_length=255)
    bank_name = models.CharField(max_length=255)
    account_number = models.CharField(max_length=255)
    ifsc_code = models.CharField(max_length=255)
    upi_details = models.CharField(max_length=255)
    local_address = models.CharField(max_length=255)
    permanent_address = models.CharField(max_length=255)
    field_experience = models.CharField(max_length=255)
    services_provided = models.TextField()
    auto_created = models.DateTimeField(default=timezone.now)    
    auto_updated = models.DateTimeField(default=timezone.now)  # Use your preferred default valu  # Use your preferred default valu    auto_updated = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
