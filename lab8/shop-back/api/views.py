from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Product, Category

def product_to_dict(product):
    return {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category': product.category.id,
    }

def category_to_dict(category):
    return {
        'id': category.id,
        'name': category.name,
    }

def products_list(request):
    products = Product.objects.all()
    data = [product_to_dict(product) for product in products]
    return JsonResponse(data, safe=False)

def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    return JsonResponse(product_to_dict(product))

def categories_list(request):
    categories = Category.objects.all()
    data = [category_to_dict(category) for category in categories]
    return JsonResponse(data, safe=False)

def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    return JsonResponse(category_to_dict(category))

def category_products(request, id):
    category = get_object_or_404(Category, id=id)
    products = category.products.all()
    data = [product_to_dict(product) for product in products]
    return JsonResponse(data, safe=False)