from django.shortcuts import render
from django.urls import reverse_lazy
from django.views import View
from django.views.generic import FormView, TemplateView, RedirectView

# Create your views here.
class homeView(TemplateView):
    template_name = 'base.html'