from django.urls import path
from .views import EmployeeViewSet, EmployeeDetailView, get_csrf_token



urlpatterns = [
    path('employee-register/', EmployeeViewSet.as_view(), name='Employee-Register-Form'),
    path('employee-detail/<int:pk>/', EmployeeDetailView.as_view(), name='Employee-update-delete-View'),
   # path('get_csrf/', get_csrf_token, name='get_csrf'),
]
