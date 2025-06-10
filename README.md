# 📝 Registration Form App – Frontend

This is the **frontend** of the Registration Form App, built using **React** and **TypeScript**. It connects to a backend and allows users to register with validation, clean UI, and error handling.

---

## 📦 Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/your-username/registration-form-app-frontend.git

# 2. Navigate into the folder
cd registration-form-app-frontend

# 3. Install dependencies
npm install

# 4. Run the app
npm run dev
```
---

## 🚀 Features

- ✅ React + TypeScript (strict typing)
- ✅ Fully integrated with the .NET Core backend
- ✅ Client-side validation (required fields, valid email, age check)
- ✅ Clean, modular component structure
- ✅ Form state management using custom hooks
- ✅ Dynamic error messages below each input
- ✅ Works seamlessly with in-memory or real backend

---

## 🧠 Technologies Used

- React
- TypeScript
- Fetch API
- CSS Modules

---

## 🧪 Registration Fields

```ts
interface RegistrationFields {
  name: string;
  email: string;
  password: string;
  dateOfBirth: string;
}


