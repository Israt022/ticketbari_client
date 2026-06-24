"use client";

import { Table } from "@heroui/react";

const TransactionTable = ({
  transactions,
}) => {
  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Transaction History">
          <Table.Header>
            <Table.Column isRowHeader >
              Transaction ID
            </Table.Column>

            <Table.Column>
              Amount
            </Table.Column>

            <Table.Column>
              Ticket Title
            </Table.Column>

            <Table.Column>
              Payment Date
            </Table.Column>
          </Table.Header>

          <Table.Body>
            {transactions.map((item) => (
              <Table.Row key={item._id}>
                <Table.Cell>
                  {item.transactionId}
                </Table.Cell>

                <Table.Cell>
                  ৳{" "}
                  {Number(
                    item.totalPrice
                  ).toLocaleString()}
                </Table.Cell>

                <Table.Cell>
                  {item.ticketTitle}
                </Table.Cell>

                <Table.Cell>
                  {item.paidAt
                    ? new Date(
                        item.paidAt
                      ).toLocaleDateString(
                        "en-GB"
                      )
                    : "-"}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
};

export default TransactionTable;