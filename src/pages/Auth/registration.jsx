import { useState } from 'react';
import AuthLayout from '../../components/layout/authLayout';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import Select from '../../components/ui/dropdown';
import { registerUser } from './../../api/authApis/registerapi';

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'accountant' // 👈 default role
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const result = await registerUser({
        username: formData.fullName,
        email: formData.email,
        password: formData.password,
        role: formData.role, // 👈 send role to backend
      });

      setSuccess("Account created successfully!");
      console.log("User registered:", result);
    } catch (err) {
      setError(err.message || "Something went wrong");
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
    <div className='registration'>
      <AuthLayout title="Create Account" subtitle="Fill in your details to get started">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Full Name" name="fullName" type="text" icon="user"
            value={formData.fullName} onChange={handleChange} required />

          <Input label="Email Address" name="email" type="email" icon="envelope"
            value={formData.email} onChange={handleChange} required />

          <Input label="Password" name="password" type="password" icon="lock"
            value={formData.password} onChange={handleChange} required />

          <Input label="Confirm Password" name="confirmPassword" type="password" icon="lock"
            value={formData.confirmPassword} onChange={handleChange} required />

          {/* 👇 Role Dropdown */}
          {/* 👇 Role Dropdown styled same as Input */}
          <Select
            label="Role"
            name="role"
            icon="user-shield"
            value={formData.role}
            onChange={handleChange}
            options={[
              { value: 'admin', label: 'Admin' },
              { value: 'accountant', label: 'Accountant' },
              { value: 'principle', label: 'Principle' },
              { value: 'society', label: 'Society' }
            ]}
            required
          />


          <Button type="submit" fullWidth disabled={loading}>
            {loading ? "Creating..." : "Create Account"}
          </Button>
        </form>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        {success && <p className="text-green-500 text-center mt-2">{success}</p>}

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Sign in
          </a>
        </p>
      </AuthLayout>
    </div>
  );
};

export default Registration;
