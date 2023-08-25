import { Summary, SummaryContainer } from './styles'
import { useBag } from '../../hooks/useBag'

export function BagSummary() {
  const { bagProducts, summaryPrice, bagProductsQuantity } = useBag()

  const formattedSummaryToCurrency = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  }).format(summaryPrice)

  return (
    <SummaryContainer>
      <Summary>
        <div>
          <p>Quantidade</p>
          <strong>Valor Total</strong>
        </div>
        <div>
          {bagProductsQuantity > 1 ? (
            <span>{bagProductsQuantity} items</span>
          ) : (
            <span>{bagProductsQuantity} item</span>
          )}

          <h3>{formattedSummaryToCurrency}</h3>
        </div>
      </Summary>
    </SummaryContainer>
  )
}
