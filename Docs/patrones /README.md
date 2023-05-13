## Builder

A nivel de objeto

```javascript
class Authentication {
    constructor() {}

    setProvider(provider) {
        this.provider = provider;
        return this;
    }

    setOAuthUrl(url) {
        this.url = url;
        return this;
    }

    build() {
        // Process settings
        return this;
    }
}

const instance = new Authentication().setProvider("Firebase"):


```

## Factory

A nivel de clase

```javascript
class DiscountFactory {
  static createDiscount(discountType) {
    switch (discountType) {
      case "10%":
        return new TenPercentDiscount();
      case "20%":
        return new TwentyPercentDiscount();
      case "30%":
        return new ThirtyPercentDiscount();
      default:
        throw new Error("Invalid discount type.");
    }
  }
}

class TenPercentDiscount {
  applyDiscount(price) {
    return price - price * 0.1;
  }
}

class TwentyPercentDiscount {
  applyDiscount(price) {
    return price - price * 0.2;
  }
}

class ThirtyPercentDiscount {
  applyDiscount(price) {
    return price - price * 0.3;
  }
}

// Uso
const discount = DiscountFactory.createDiscount("10%");
const price = 100;
const finalPrice = discount.applyDiscount(price);
console.log(
  `Precio original: ${price}, Precio final con descuento: ${finalPrice}`
);
```

## Singleton

```javascript
class Authentication {
  static _instance;

  static getInstance() {
    if (!Authenticacion._instance) {
      Authenticacion._instance = new Authentication();
    }
    return Authentication._instance;
  }
}
```

## Adapter, Decorator

Adapta las propiedades del objeto al requerimiento

```typescript
@Route("/")
class AppController {
  healthCheck(_, res) {
    res.send("Healthy");
  }
}
```

```javascript
class User {
  constructor(username, password) {
    this.username = username;
    this._password = encrypt(password);
  }

  setPassword(newPass) {
    this._password = encrypt(password);
  }

  getPassword() {
    return "****";
  }
}

const user = new User("mariarua", "123456");
```

## Chain of Responsibility

```javascript
// Define una función que verifica si una petición es de un tipo específico
function isOfType(req, type) {
  return req.method === type;
}

// Define un middleware que maneja peticiones GET
function handleGet(req, res, next) {
  if (isOfType(req, "GET")) {
    console.log("Manejando una petición GET");
    res.send("Petición GET manejada");
  } else {
    next();
  }
}

// Define un middleware que maneja peticiones POST
function handlePost(req, res, next) {
  if (isOfType(req, "POST")) {
    console.log("Manejando una petición POST");
    res.send("Petición POST manejada");
  } else {
    next();
  }
}

// Define un middleware que maneja peticiones PUT
function handlePut(req, res, next) {
  if (isOfType(req, "PUT")) {
    console.log("Manejando una petición PUT");
    res.send("Petición PUT manejada");
  } else {
    next();
  }
}

// Define un middleware que maneja peticiones DELETE
function handleDelete(req, res, next) {
  if (isOfType(req, "DELETE")) {
    console.log("Manejando una petición DELETE");
    res.send("Petición DELETE manejada");
  } else {
    next();
  }
}

// Define una cadena de middlewares para manejar diferentes tipos de peticiones
const requestHandlerChain = [handleGet, handlePost, handlePut, handleDelete];

// Registra los middlewares en una ruta específica
app.use("/api", requestHandlerChain);
```
