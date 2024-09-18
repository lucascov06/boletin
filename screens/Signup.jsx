import React from 'react';

function Signup() {
  return (
    <div>
      <h2>Ingrese su Cuenta!</h2>
      <form>
        <label>
          <input type="text" placeholder="Nombre de usuario o gmail" />
        </label>
        <label>
          <input type="text" placeholder="ID token" />
        </label>
        <label>
          <input type="password" placeholder="Contraseña" />
        </label>
        <button type="submit">Ingresar</button>
      </form>
      <p>¿Olvidaste tu contraseña?</p>
    </div>
  );
}

export default Signup;