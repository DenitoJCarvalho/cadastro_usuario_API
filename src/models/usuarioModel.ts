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
    validate: {
      len: {
        args: [3, 40],
        msg: `Campo nome deve ter entre 3 a 40 caracteres.`
      }
    }
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: {
        args: [20, 40],
        msg: `Campo email é obrigatório.`
      }
    }
  },

  senha: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [4, 20],
        msg: `Campo senha deve ter entre 4 a 20 caracteres.`
      }
    }
  },

  status: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  }
});

//Usuario.sync({ force: true });