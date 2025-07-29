import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";

@Injectable()
export class PostagemService {
    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>
    ) { }


    async findAll(): Promise<Postagem[]> {
        return await this.postagemRepository.find();
    }


    async findById(id: number): Promise<Postagem> {
        const postagem = await this.postagemRepository.findOne({ where: { id: id } })

        if (!postagem) throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND);


        return postagem;

    }

    async findAllByTitulo(titulo: string): Promise<Postagem[]> {
        return await this.postagemRepository.find({
            where: {
                titulo: ILike(`%${titulo}%`)
            }
        })
    }


    async create(postagem: Postagem): Promise<Postagem> {
        return await this.postagemRepository.save(postagem);
    }


    async update(postagem: Postagem): Promise<Postagem> {
        // await this.findById(postagem.id);
        // if (!postagem.id) throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND);
        let buscaPostagem = await this.findById(postagem.id);
        if (!buscaPostagem ||!postagem.id) throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND);
        return await this.postagemRepository.save(postagem);

    }

    async delele(id: number): Promise<DeleteResult> {
        // await this.findById(id);
        // if (!id) throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND);
        let buscaPostagem = await this.findById(id);
        if (!buscaPostagem) throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND);
        return await this.postagemRepository.delete(id);
    }

}