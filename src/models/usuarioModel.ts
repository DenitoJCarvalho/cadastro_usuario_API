import { DataTypes } from 'sequelize';
import { database } from '../database/sequelize';

export const Usuario = database.define('Usuario', {
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },

  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  senha: {
    type: DataTypes.STRING,
    allowNull: false
  },

  status: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  }
});

//Usuario.sync({ force: true });