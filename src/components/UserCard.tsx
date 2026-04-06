import { memo } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserCardProps {
  user: User;
}

// Без memo — компонент рендерится при каждом рендере родительского компонента
// export function UserCard({ user }: UserCardProps) {
//   console.log("UserCard render");
//   return (
//     <div className="card">
//       <h3>{user.name}</h3>
//       <p>{user.email}</p>
//     </div>
//   );
// }

// С memo — компонент будет рендериться только если props изменятся
export const UserCard = memo(function UserCard({ user }: UserCardProps) {
  console.log("UserCard render");
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
});

// Пример с кастомной функцией сравнения (опционально)
export const UserCardWithCompare = memo(
  function UserCardWithCompare({ user }: UserCardProps) {
    return (
      <div className="card">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Сравнение пропсов вручную, чтобы не перерендеривать, если они не изменились
    return (
      prevProps.user.id === nextProps.user.id &&
      prevProps.user.name === nextProps.user.name
    );
  }
);