import { useState } from 'react';
import AuthLayout from '../../components/layout/authLayout';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { loginUser } from './../../api/authApis/loginapi'; // 👈 create this API function

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);


   const navigate = useNavigate();

   
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const result = await loginUser({
        email: formData.email,
        password: formData.password
      });

      setSuccess("Login successful!");
      console.log("User logged in:", result);

       navigate("/dashboard");

      // Optionally: redirect user after login
      // window.location.href = "/dashboard";
    } catch (err) {
      setError(err.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="login">
      <AuthLayout title="Welcome Back" subtitle="Enter your details to sign in">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            label="Email Address" 
            name="email" 
            type="email" 
            icon="envelope"
            value={formData.email} 
            onChange={handleChange} 
            required 
          />

          <Input 
            label="Password" 
            name="password" 
            type="password" 
            icon="lock"
            value={formData.password} 
            onChange={handleChange} 
            required 
          />

          <Button type="submit" fullWidth disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        {success && <p className="text-green-500 text-center mt-2">{success}</p>}

        <p className="text-center mt-6 text-gray-600">
          Don’t have an account?{' '}
          <a href="/register" className="text-blue-600 hover:underline">
            Create one
          </a>
        </p>
      </AuthLayout>
    </div>
  );
};

export default Login;
