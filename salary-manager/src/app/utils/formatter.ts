export function formatCurrency(currency: number) {
  return currency.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
}

export function formatDate(date: string) {
  const dateAux = new Date(date);
  return dateAux.toLocaleDateString('pt-BR');
}

export function formatDateAPI(date: string) {
  const dateAux = new Date(date);
  return dateAux.toISOString().split('T')[0];
}
