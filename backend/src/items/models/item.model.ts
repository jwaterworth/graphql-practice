import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type ItemType = 'urgentAndImportant' | 'urgentAndNotImportant' | 'notUrgentAndImportant' | 'notUrgentAndNotImportant';

@Entity()
@ObjectType()
export class Item {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Field({ nullable: false })
    @Column({ nullable: false })
    name: string;

    @Field({ nullable: false })
    @Column({ nullable: false, default: 'urgentAndImportant' })
    type: ItemType;

    @Field(type => Int)
    @Column({ nullable: false, default: 0 })
    done: boolean;

}