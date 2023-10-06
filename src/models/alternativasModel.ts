import { DataTypes } from 'sequelize';
import { database } from '../database/sequelize';

const Alternativas = database.define('Alternativas', {
  alternativa_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },

  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: { args: [3, 200], msg: `O campo descricao deve ter entre 3 e 200 caracteres.` }
    }
  },

  flag: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },

});


Alternativas.sync({ force: true });


