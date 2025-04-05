import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Items, ItemsDocument } from './schema/items.schema';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Items.name) private itemsModule: Model<ItemsDocument>,
  ) {}
  async create(createItemDto: CreateItemDto): Promise<ItemsDocument> {
    const createdItems = new this.itemsModule(createItemDto);
    return createdItems.save();
  }

  async findAll(): Promise<Items[]> {
    return this.itemsModule.find().exec(); // 🔥 Obtiene los datos desde MongoDB
  }

  async findOne(id: string): Promise<Items> {
    const item = await this.itemsModule.findById(id).exec();
    if (!item) {
      throw new NotFoundException(`Item con ID ${id} no encontrado`);
    }
    return item;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
