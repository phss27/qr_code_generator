import { useState, ChangeEvent } from 'react';

interface UseLogoUploadReturn {
  logoUrl: string;
  logoFile: File | null;
  handleLogoChange: (e: ChangeEvent<HTMLInputElement>) => void;
  clearLogo: () => void;
}

export const useLogoUpload = (): UseLogoUploadReturn => {
  const [logoUrl, setLogoUrl] = useState<string>('');
  const [logoFile, setLogoFile] = useState<File | null>(null);

  const handleLogoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (!file) {
      return;
    }

    // Validando se é uma imagem
    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecione um arquivo de imagem');
      return;
    }

    // Convertendo o arquivo para URL
    const reader = new FileReader();
    
    reader.onload = (event) => {
      const result = event.target?.result;
      if (typeof result === 'string') {
        setLogoUrl(result);
      }
    };

    reader.onerror = () => {
      alert('Erro ao ler o arquivo');
    };

    reader.readAsDataURL(file);
    setLogoFile(file);
  };

  const clearLogo = () => {
    setLogoUrl('');
    setLogoFile(null);
  };

  return {
    logoUrl,
    logoFile,
    handleLogoChange,
    clearLogo,
  };
};

