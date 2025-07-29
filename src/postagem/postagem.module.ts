import { Module } from "@nestjs/common";
import { Postagem } from "./entities/postagem.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemController } from "./controller/postagem.controller";
import { PostagemService } from "./services/postagem.service";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem])],
    controllers: [PostagemController],
    providers: [PostagemService],
    exports: [TypeOrmModule]
})
export class PostagemModule {

}