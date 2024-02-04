from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def index(request):
    context= {}
    return render(request,'app/index.html', context)
def cart(request):
    context= {}
    return render(request, 'app/cart.html', context)
def checkout(request):
    context= {}
    return render(request, 'app/checkout.html', context)
def about(request):
    context= {}
    return render(request,'app/about.html', context)
def blog(request):
    context= {}
    return render(request, 'app/blog.html', context)
def contact(request):
    context= {}
    return render(request, 'app/contact.html', context)
def services(request):
    context= {}
    return render(request,'app/services.html', context)
def shop(request):
    context= {}
    return render(request, 'app/shop.html', context)
def thankyou(request):
    context= {}
    return render(request, 'app/thankyou.html', context)