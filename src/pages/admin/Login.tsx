import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/context/LanguageContext';

export default function AdminLogin() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Check admin credentials in admin_users table
      const { data: adminUser, error } = await supabase
        .from('admin_users')
        .select('*')
        .eq('email', email)
        .single();

      if (error || !adminUser) {
        throw new Error('Invalid credentials');
      }

      // For simplicity, we'll use a basic password check
      // In production, you should use proper hashing
      if (adminUser.password_hash !== password) {
        throw new Error('Invalid credentials');
      }

      // Store admin session
      localStorage.setItem('adminAuth', JSON.stringify({
        id: adminUser.id,
        email: adminUser.email,
        authenticated: true
      }));

      toast({
        title: t('تم تسجيل الدخول بنجاح', 'Login successful'),
      });

      navigate('/admin/dashboard');
    } catch (error: any) {
      toast({
        title: t('خطأ في تسجيل الدخول', 'Login error'),
        description: t('البريد الإلكتروني أو كلمة المرور غير صحيحة', 'Invalid email or password'),
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            {t('لوحة التحكم', 'Admin Dashboard')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">
                {t('البريد الإلكتروني', 'Email')}
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                dir="ltr"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">
                {t('كلمة المرور', 'Password')}
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                dir="ltr"
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading
                ? t('جاري تسجيل الدخول...', 'Logging in...')
                : t('تسجيل الدخول', 'Login')}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}