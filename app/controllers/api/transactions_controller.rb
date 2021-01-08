class Api::TransactionsController < ApplicationController

  def index
    render json: Transaction.all
  end

  def create
    transaction = Transaction.new(transaction_params)
    if transaction.save
      render json: transaction
    else
      render json: { errors: transaction.errors }, status: :unprocessable_entity
    end
  end

  def update
    transaction = Transaction.find(params[:id])
    if transaction.update(transaction_params)
      render json: transaction
    else
      render json: transaction.errors
    end
  end

  def destroy
    Transaction.find(params[:id]).destroy
    render json: { message: 'Transaction Deleted'}
  end

  private 

  def transaction_params
    params.require(:transaction).permit(:name, :amount)
  end

end
