from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    """To converts model instances to JSON and vice versa.
    """
    class Meta:
        model = Student
        fields = '__all__'
