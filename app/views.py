from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import *
# Create your views here.
def index(request):
    products = Product.objects.all()[:3]
    context= {'products': products}
    return render(request,'app/index.html', context)
def cart(request):
    if request.user.is_authenticated:
        customer = request.user.customer
        order, created = Order.objects.get_or_create(customer = customer, complete=False)
        items = order.orderitem_set.all()
    else:
        items = []
        order = {'get_cart_items':0, 'get_cart_total':0}
    context= {'items':items, 'order':order}
    return render(request, 'app/cart.html', context)
def checkout(request):
    if request.user.is_authenticated:
        customer = request.user.customer
        order, created = Order.objects.get_or_create(customer = customer, complete=False)
        items = order.orderitem_set.all()
    else:
        items = []
        order = {'get_cart_items':0, 'get_cart_total':0}
    context= {'items':items, 'order':order}
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
    products = Product.objects.all()[:3]
    context= {'products': products}
    return render(request,'app/services.html', context)
def shop(request):
    products = Product.objects.all()
    context= {'products': products}
    return render(request, 'app/shop.html', context)
def thankyou(request):
    context= {}
    return render(request, 'app/thankyou.html', context)
def updateItem(request):
    return JsonResponse('added', safe=False)