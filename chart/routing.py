from django.urls import path
from .consumers import Graph1

ws_urlpatterns = [
    path('ws/chart/', Graph1.as_asgi())
]