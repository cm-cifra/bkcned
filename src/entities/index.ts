import { CategoriesEntity } from "src/categories/categories.entity";
import { CollectionsEntity } from "src/collections/collections.entity";
import { InfoBathRoomAccessoriesEntity } from "src/info_bathroom_accessories/info_bathroom_accessories.entity";
import { InfoBathsDisabledEntity } from "src/info_baths_disabled/info_baths_disabled.entity";
import { InfoCounterTopSinkEntity } from "src/info_counter_top_sink/info_counter_top_sink.entity";
import { InfoKitchenSinkEntity } from "src/info_kitchen_sink/info_kitchen_sink.entity";
import { InfoKitsEntity } from "src/info_kits/info_kits.entity";
import { InfoMirrorCabinetsEntity } from "src/info_mirror_cabinets/info_mirror_cabinets.entity";
import { InfoMirrorsEntity } from "src/info_mirrors/info_mirrors.entity";
import { InfoMixersEntity } from "src/info_mixers/info_mixers.entity";
import { InfoPedestalsEntity } from "src/info_pedestals/info_pedestals.entity";
import { InfoShowerSystemsEntity } from "src/info_shower_systems/info_shower_systems.entity";
import { InventoryEntity } from "src/inventory/inventory.entity";
import { ProductKitsEntity } from "src/product_kits/product_kits.entity";
import { ProductsEntity } from "src/products/products.entity";
import { ProductsImgEntity } from "src/products_img/products_img.entity";
import { UserCartsEntity } from "src/user_carts/user_carts.entity";
import { UserMenuEntity } from "src/user_menu/user_menu.entity";
import { UserOrdersEntity } from "src/user_orders/user_orders.entity";
import { UserOrdersListEntity } from "src/user_orders_list/user_orders_list.entity";
import { UserTypeMenuEntity } from "src/user_type_menu/user_type_menu.entity";
import { UserTypesEntity } from "src/user_types/user_types.entity";
import { UsersEntity } from "src/users/users.entity";
import { CartsEntity } from "src/cart/cart.entity";

const entities = [CartsEntity,
    CategoriesEntity,
    CollectionsEntity,
    InfoBathRoomAccessoriesEntity,
    InfoBathsDisabledEntity,
    InfoCounterTopSinkEntity,
    InfoKitchenSinkEntity,
    InfoKitsEntity,
    InfoMirrorCabinetsEntity,
    InfoMirrorsEntity,
    InfoMixersEntity,
    InfoPedestalsEntity,
    InfoShowerSystemsEntity,
    ProductsEntity,
    UserTypesEntity,
    UsersEntity,
    UserOrdersEntity,
    UserOrdersListEntity,
    InventoryEntity,
    UserMenuEntity,
    UserTypeMenuEntity,
    ProductKitsEntity,
    ProductsImgEntity,
    UserCartsEntity,

];

export {
    CartsEntity,
    CategoriesEntity,
    CollectionsEntity,
    InfoBathRoomAccessoriesEntity,
    InfoBathsDisabledEntity,
    InfoCounterTopSinkEntity,
    InfoKitchenSinkEntity,
    InfoKitsEntity,
    InfoMirrorCabinetsEntity,
    InfoMirrorsEntity,
    InfoMixersEntity,
    InfoPedestalsEntity,
    InfoShowerSystemsEntity,
    ProductsEntity,
    UserTypesEntity,
    UsersEntity,
    UserOrdersEntity,
    UserOrdersListEntity,
    InventoryEntity,
    UserMenuEntity,
    UserTypeMenuEntity,
    ProductKitsEntity,
    ProductsImgEntity,
    UserCartsEntity
};

export default entities;