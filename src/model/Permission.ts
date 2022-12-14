import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export class Permission extends Model {
    declare id: number;
    declare role: string;
}

Permission.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        validate: {
            isInt: true,
        }
    },
    role: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            isAlphanumeric: true,
        }
    },
},
    {
        sequelize,
        timestamps: false,
    }
);