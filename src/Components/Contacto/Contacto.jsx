import React from 'react'

const Contacto = () => {
  return (
    <>
    <form class="row g-3 needs-validation" novalidate>
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="validationCustom01" required/>
        <div class="valid-feedback">
          Su nombre
        </div>
      </div>
      
      <div class="col-md-4">
        <label for="validationCustomUsername" class="form-label">e-mail</label>
        <div class="input-group has-validation">
          <span class="input-group-text" id="inputGroupPrepend">@</span>
          <input type="email" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
          <div class="invalid-feedback">
            Escriba su e-mail
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <label for="validationCustom03" class="form-label">Su mensaje</label>
        <textarea type="text" class="form-control" id="validationCustom03" required/>
        <div class="invalid-feedback">
          Escriba su mensaje para continuar
        </div>
      </div>

      <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit form</button>
      </div>
    </form>
    </>
    
  )
}

export default Contacto