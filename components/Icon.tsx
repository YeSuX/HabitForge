import { icons } from 'lucide-react';

type Props = {
  name: keyof typeof icons,
}

const Icon = ({ name }: Props) => {
  const LucideIcon = icons[name];

  return <LucideIcon />;
};

export default Icon;
