import { 
  Phone, 
  Facebook, 
  Instagram, 
  Youtube, 
  ShoppingBag, 
  BookOpen, 
  TrendingUp, 
  DollarSign,
  MessageSquare
} from 'lucide-react';

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: any;
  image: string;
  price: string;
  category: string;
}

export const COURSES: Course[] = [
  {
    id: 'whatsapp',
    title: 'Ganhar Dinheiro no WhatsApp',
    description: 'Aprenda técnicas de vendas diretas e fechamento pelo mensageiro mais usado do mundo.',
    icon: MessageSquare,
    image: 'https://picsum.photos/seed/whatsapp/800/600',
    price: 'Grátis',
    category: 'Vendas'
  },
  {
    id: 'facebook',
    title: 'Vender no Facebook',
    description: 'Domine o Marketplace e grupos segmentados para vender qualquer produto ou serviço.',
    icon: Facebook,
    image: 'https://picsum.photos/seed/facebook/800/600',
    price: 'Grátis',
    category: 'Redes Sociais'
  },
  {
    id: 'instagram',
    title: 'Vender no Instagram',
    description: 'Transforme seu perfil em uma vitrine profissional que atrai seguidores e clientes reais.',
    icon: Instagram,
    image: 'https://picsum.photos/seed/instagram/800/600',
    price: 'Grátis',
    category: 'Redes Sociais'
  },
  {
    id: 'tiktok',
    title: 'Ganhar Dinheiro no TikTok',
    description: 'Aproveite o alcance viral do TikTok para monetizar sua audiência de forma rápida.',
    icon: TrendingUp,
    image: 'https://picsum.photos/seed/tiktok/800/600',
    price: 'Grátis',
    category: 'Entretenimento'
  },
  {
    id: 'youtube',
    title: 'Monetizar no YouTube',
    description: 'Crie um canal de sucesso e gere renda com anúncios, parcerias e vendas próprias.',
    icon: Youtube,
    image: 'https://picsum.photos/seed/youtube/800/600',
    price: 'Prêmio',
    category: 'Vídeo'
  },
  {
    id: 'hotmart',
    title: 'Trabalhar com Hotmart',
    description: 'Tudo sobre o mercado de afiliados: escolha os melhores produtos e faça sua primeira venda.',
    icon: ShoppingBag,
    image: 'https://picsum.photos/seed/hotmart/800/600',
    price: 'Prêmio',
    category: 'Afiliados'
  },
  {
    id: 'clickbank',
    title: 'Trabalhar com ClickBank',
    description: 'Como entrar no mercado internacional e ganhar em dólar como afiliado profissional.',
    icon: DollarSign,
    image: 'https://picsum.photos/seed/clickbank/800/600',
    price: 'Prêmio',
    category: 'Afiliados'
  },
  {
    id: 'ebooks',
    title: 'Criar e Vender eBooks',
    description: 'Transforme seu conhecimento em um livro digital e venda automaticamente pela internet.',
    icon: BookOpen,
    image: 'https://picsum.photos/seed/ebooks/800/600',
    price: 'Prêmio',
    category: 'Produtos Digitais'
  }
];

export const METHODS = [
  { name: 'M-Pesa', color: 'bg-red-600' },
  { name: 'e-Mola', color: 'bg-orange-500' }
];
