"use client";
import React, { useState } from 'react';
import Todo from './Todo';
import styles from "../page.module.css";
import moviesWithPrices from './Datos';

const Form = () => {
  const [movieName, setMovieName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [todos, setTodos] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedMoviePrice, setSelectedMoviePrice] = useState(0);

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'movieName') {
      setMovieName(value);
      const selectedMovie = moviesWithPrices.find(movie => movie.nombre === value);
      if (selectedMovie) {
        setSelectedMoviePrice(selectedMovie.precio);
      }
    } else if (name === 'quantity') {
      setQuantity(value);
    }
  };

  const handleClick = e => {
    e.preventDefault();
    if (!movieName.trim() || !quantity.trim()) {
      alert('Todos los campos deben ser completados');
      return;
    }

    const totalPriceOfMovie = selectedMoviePrice * parseInt(quantity);

    const newTodo = {
      movieName: movieName,
      quantity: parseInt(quantity),
      price: totalPriceOfMovie
    };

    setTodos([...todos, newTodo]);
    setMovieName('');
    setQuantity('');

    const newTotalPrice = todos.reduce((acc, cur) => acc + cur.price, 0) + totalPriceOfMovie;
    setTotalPrice(newTotalPrice);
  };

  const deleteTodo = indice => {
    const newTodos = [...todos];
    const deletedPrice = newTodos[indice].price;
    newTodos.splice(indice, 1);
    setTodos(newTodos);

    const newTotalPrice = totalPrice - deletedPrice;
    setTotalPrice(newTotalPrice);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.form_row}>
          <label className={styles.form_label}>Nombre de la película:</label>
          <select className={styles.form_input} name='movieName' value={movieName} onChange={handleChange}>
            <option value="">Selecciona una película</option>
            {moviesWithPrices.map((movie, index) => (
              <option key={index} value={movie.nombre}>{`${movie.nombre} - ${movie.precio}`}</option>  
            ))}
          </select>
        </div>
        <div className={styles.form_row}>
          <label className={styles.form_label}>Cantidad:</label>
          <input className={styles.form_input} type='number' name='quantity' value={quantity} onChange={handleChange} />
        </div>
        <button className={styles.form_button} onClick={handleClick}>Agregar</button>
      </form>
      
      {todos.map((value, index) => (
        <Todo
          key={index}
          todo={`Película: ${value.movieName} | Precio: ${value.price} | Cantidad: ${ value.quantity} `}
          index={index}
          deleteTodo={deleteTodo}
        />
      ))}
    
      <div className={styles.total}>Total: ${totalPrice.toFixed(2)}</div>
    </div>
  );
};

export default Form;
