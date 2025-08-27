import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SearchViaCategoriesComponent } from './search-via-categories/search-via-categories.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { VendorPageComponent } from './vendor-page/vendor-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"contact",component:ContactUsComponent},
    {path:"profile",component:ProfilePageComponent},
    {path:"cart",component:CartComponent},
    {path:"blog",component:BlogPageComponent},
    {path:"shop",component:ShopPageComponent},
    {path:"wishlist",component:WishlistComponent},
    {path:"vendor",component:VendorPageComponent},
    {path:"SearchViaCategory/:id",component:SearchViaCategoriesComponent},
    {path:"ProductDetails/:ProductId",component:ProductDetailsComponent},
];
