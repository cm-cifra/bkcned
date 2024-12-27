import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as session from 'express-session';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: '*',
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  app.use(
    session({
      secret: '123456789',  
      resave: false,  
      saveUninitialized: false, 
      cookie: {
        httpOnly: true, 
        secure: false, 
        maxAge: 1000 * 60 * 60 * 24 * 7, 
      },
    })
  );
  const config = new DocumentBuilder()
    .setTitle('ArtDecco')
    .setDescription('The description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  await app.listen(5000);
}


bootstrap();

// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import * as fs from 'fs';
// import { join } from 'path';
// async function bootstrap() {
// const httpsOptions = {
//     key: fs.readFileSync(join(__dirname, '../key.pem')),
//     cert: fs.readFileSync(join(__dirname, '../certificate.pem')),
//   };

// const app = await NestFactory.create(AppModule, {
// httpsOptions
// });

//   app.enableCors({
//     allowedHeaders: '*',
//     origin: true,
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
//     credentials: true,
//   });

//   const config = new DocumentBuilder()
//     .setTitle('ArtDecco')
//     .setDescription('The description')
//     .setVersion('1.0')
//     .build();
//   const document = SwaggerModule.createDocument(app, config);
//   SwaggerModule.setup('/', app, document);

//   await app.listen(3000);
// }


// bootstrap();
