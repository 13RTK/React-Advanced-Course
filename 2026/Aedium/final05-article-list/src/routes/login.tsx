import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/login')({
  component: LoginForm,
});

function LoginForm() {
  return <div>Hello "/login"!</div>;
}
