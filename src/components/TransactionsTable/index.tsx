import { useTransactions } from "../../hooks/useTransactions";
import { Container, ItemTransaction, ListItemTransaction } from "./styles";

export function TransactionsTable() {

    const { transactions } = useTransactions();

    const leaghtTransactions = transactions.length;

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',
                                    }).format(transaction.amount)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>

            <ListItemTransaction>
                <div className="headerList">
                    <h2>Listagem</h2>
                    <p>{leaghtTransactions} itens</p>
                </div>
                
                {transactions.map(transaction => {
                    return(
                        <ItemTransaction key={transaction.id} >
                            <p>{transaction.title}</p>
                            <h3 className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',
                                }).format(transaction.amount)}
                            </h3>
                            <div>
                                <span>{transaction.category}</span> <span>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</span>
                            </div>
                        </ItemTransaction>
                    )
                })}
            </ListItemTransaction>

        </Container>
    );
}