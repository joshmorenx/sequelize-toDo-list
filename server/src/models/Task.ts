import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Task extends Model {
    public id!: number;
    public title!: string;
    public description?: string;
    public completed!: boolean;

    // Timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Task.init(
    {
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT },
        completed: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
        sequelize,
        tableName: 'tasks',
    }
);

export default Task;
