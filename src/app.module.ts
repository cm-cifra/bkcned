import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { HttpModule } from '@nestjs/axios'; // Import HttpModule
import { InfoBathRoomAccessoriesService } from './info_bathroom_accessories/info_bathroom_accessories.service';
import { InfoBathRoomAccessoriesModule } from './info_bathroom_accessories/info_bathroom_accessories.module';
import { InfoBathsDisabledController } from './info_baths_disabled/info_baths_disabled.controller';
import { InfoBathsDisabledService } from './info_baths_disabled/info_baths_disabled.service';
import { InfoBathsDisabledModule } from './info_baths_disabled/info_baths_disabled.module';
import { InfoCounterTopSinkController } from './info_counter_top_sink/info_counter_top_sink.controller';
import { InfoCounterTopSinkService } from './info_counter_top_sink/info_counter_top_sink.service';
import { InfoCounterTopSinkModule } from './info_counter_top_sink/info_counter_top_sink.module';
import { InfoKitchenSinkController } from './info_kitchen_sink/info_kitchen_sink.controller';
import { InfoKitchenSinkService } from './info_kitchen_sink/info_kitchen_sink.service';
import { InfoKitchenSinkModule } from './info_kitchen_sink/info_kitchen_sink.module';
import entities from './entities';
import { InfoKitsModule } from './info_kits/info_kits.module';
import { InfoMirrorCabinetsModule } from './info_mirror_cabinets/info_mirror_cabinets.module';
import { InfoMirrorsModule } from './info_mirrors/info_mirrors.module';
import { InfoMixersModule } from './info_mixers/info_mixers.module';
import { InfoPedestalsModule } from './info_pedestals/info_pedestals.module';
import { InfoShowerSystemsModule } from './info_shower_systems/info_shower_systems.module';
import { ProductsModule } from './products/products.module';
import { UserTypesModule } from './user_types/user_types.module';
import { UsersModule } from './users/users.module';
import { InfoKitsController } from './info_kits/info_kits.controller';
import { InfoMirrorCabinetsController } from './info_mirror_cabinets/info_mirror_cabinets.controller';
import { InfoMirrorsController } from './info_mirrors/info_mirrors.controller';
import { InfoMixersController } from './info_mixers/info_mixers.controller';
import { InfoPedestalsController } from './info_pedestals/info_pedestals.controller';
import { InfoShowerSystemsController } from './info_shower_systems/info_shower_systems.controller';
import { ProductsController } from './products/products.controller';
import { UserTypesController } from './user_types/user_types.controller';
import { UsersController } from './users/users.controller';
import { InfoMirrorCabinetsService } from './info_mirror_cabinets/info_mirror_cabinets.service';
import { InfoMirrorsService } from './info_mirrors/info_mirrors.service';
import { InfoMixersService } from './info_mixers/info_mixers.service';
import { InfoPedestalsService } from './info_pedestals/info_pedestals.service';
import { InfoShowerSystemsService } from './info_shower_systems/info_shower_systems.service';
import { ProductsService } from './products/products.service';
import { UserTypesService } from './user_types/user_types.service';
import { UsersService } from './users/users.service';
import { UserOrdersController } from './user_orders/user_orders.controller';
import { UserOrdersService } from './user_orders/user_orders.service';
import { UserOrdersModule } from './user_orders/user_orders.module';
import { UserOrdersListController } from './user_orders_list/user_orders_list.controller';
import { UserOrdersListService } from './user_orders_list/user_orders_list.service';
import { UserOrdersListModule } from './user_orders_list/user_orders_list.module';
import { InventoryController } from './inventory/inventory.controller';
import { InventoryService } from './inventory/inventory.service';
import { InventoryModule } from './inventory/inventory.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { InfoKitsService } from './info_kits/info_kits.service';
import { UserMenuController } from './user_menu/user_menu.controller';
import { UserMenuService } from './user_menu/user_menu.service';
import { UserMenuModule } from './user_menu/user_menu.module';
import { UserTypeMenuController } from './user_type_menu/user_type_menu.controller';
import { UserTypeMenuService } from './user_type_menu/user_type_menu.service';
import { UserTypeMenuModule } from './user_type_menu/user_type_menu.module';
import { CategoriesModule } from './categories/categories.module';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';
import { CollectionsController } from './collections/collections.controller';
import { CollectionsService } from './collections/collections.service';
import { CollectionsModule } from './collections/collections.module';
import { ProductKitsController } from './product_kits/product_kits.controller';
import { ProductKitsService } from './product_kits/product_kits.service';
import { ProductKitsModule } from './product_kits/product_kits.module';
import { ProductsImgController } from './products_img/products_img.controller';
import { ProductsImgService } from './products_img/products_img.service';
import { ProductsImgModule } from './products_img/products_img.module';
import { UserCartsController } from './user_carts/user_carts.controller';
import { UserCartsService } from './user_carts/user_carts.service';
import { UserCartsModule } from './user_carts/user_carts.module';
import { CartModule } from './cart/cart.module';
import { CartService } from './cart/cart.service';
import { CartController } from './cart/cart.controller';
import { I18nModule } from 'nestjs-i18n';
import { TelegramModule } from './telegram/telegram.module';
import { TelegramService } from './telegram/telegram.service';
import { TelegramController } from './telegram/telegram.controller';
import { StatusService } from './status/status.service';
import { StatusController } from './status/status.controller';
import { StatusModule } from './status/status.module';
import { TypeService } from './type/type.service';
import { TypeController } from './type/type.controller';
import { TypeModule } from './type/type.module';
import { InvoiceInfoService } from './invoice_info/invoice_info.service';
import { InvoiceInfoController } from './invoice_info/invoice_info.controller';
import { InvoiceInfoModule } from './invoice_info/invoice_info.module';

import { InvoiceService } from './invoice/invoice.service';
import { InvoiceController  } from './invoice/invoice.controller';
import { InvoiceModule } from './invoice/invoice.module';
import { DeliveryOptionService } from './delivery_option/delivery_option.service';
import { DeliveryOptionController } from './delivery_option/delivery_option.controller';
import { DeliveryOptionModule } from './delivery_option/delivery_option.module';

@Module({
  imports: [
    MulterModule.register({
      dest: '../images',
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: './i18n',
        watch: true,
      },
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forFeature(entities),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: entities,
      synchronize: false,
    }),
    CartModule,
    InfoBathRoomAccessoriesModule,
    InfoBathsDisabledModule,
    InfoCounterTopSinkModule,
    InfoKitchenSinkModule,
    InfoKitsModule,
    InfoMirrorCabinetsModule,
    InfoMirrorsModule,
    InfoMixersModule,
    InfoPedestalsModule,
    InfoShowerSystemsModule,
    ProductsModule,
    UserTypesModule,
    UsersModule,
    UserOrdersModule,
    UserOrdersListModule,
    InventoryModule,
    AuthModule,
    UserMenuModule,
    UserTypeMenuModule,
    CategoriesModule,
    CollectionsModule,
    ProductKitsModule,
    ProductsImgModule,
    UserCartsModule,
    TelegramModule,
    HttpModule,
    InvoiceModule,
    StatusModule,
    TypeModule,
    InvoiceInfoModule,
    DeliveryOptionModule, // Add HttpModule to imports
  ],
  controllers: [
    AppController,
    InfoBathsDisabledController,
    TelegramController,
    InfoCounterTopSinkController,
    InfoKitchenSinkController,
    InfoKitsController,
    InfoMirrorCabinetsController,
    InfoMirrorsController,
    InfoMixersController,
    InfoPedestalsController,
    InfoShowerSystemsController,
    ProductsController,
    UserTypesController,
    UsersController,
    UserOrdersController,
    UserOrdersListController,
    InventoryController,
    UserMenuController,
    CartController,
    UserTypeMenuController,
    CategoriesController,
    CollectionsController,
    ProductKitsController,
    ProductsImgController,
    UserCartsController,
    StatusController,
    TypeController,
    InvoiceInfoController,
    DeliveryOptionController,
    InvoiceController
  ],
  providers: [
    AppService,
    CartService,
    InfoBathRoomAccessoriesService,
    InfoBathsDisabledService,
    InfoCounterTopSinkService,
    InfoKitchenSinkService,
    InfoKitsService,
    InfoMirrorCabinetsService,
    InfoMirrorsService,
    InfoMixersService,
    InfoPedestalsService,
    InfoShowerSystemsService,
    ProductsService,
    UserTypesService,
    UsersService,
    UserOrdersService,
    UserOrdersListService,
    InventoryService,
    UserMenuService,
    UserTypeMenuService,
    CategoriesService,
    CollectionsService,
    ProductKitsService,
    ProductsImgService,
    UserCartsService,
    TelegramService,
    StatusService,
    TypeService,
    InvoiceInfoService,
    DeliveryOptionService,
    InvoiceService
  ],
})
export class AppModule {}
