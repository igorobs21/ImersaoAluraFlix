import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState(['teste']);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }
  function handleChange(infosDoEvento) {
    // const { getAttribute, value } = infosDoEvento.target;
    // setValue( getAttribute('name'), value);
    setValue(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value);
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria: "
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />
        <FormField
          label="Descrição: "
          type="textarea"
          as = "textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />
        <FormField
          label="Cor: "
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />

        {/*
        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              value={values.nome}
              name="nome"
              onChange={ handleChange }
            />
          </label>
        </div>
        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={ handleChange }
            />
          </label>
        </div>

        <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={ handleChange }
            />
          </label>
        </div>

        */}

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
