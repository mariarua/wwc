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
