class ScoresController < ApplicationController
  def create
    puts "-----------------------------------------------------------------"
    puts scores_params
    @score = Score.new(scores_params)
    # @score.save
    @current_user = current_user
    
  end
  def game
    @game = Game.order("RANDOM()").first
  end

  def all_time_highscores
    @all_time_highscores = Score.all.order(score: :desc).first(10)
    render json: @all_time_highscores
  end
  private
  def scores_params 
    # params(:score => {:user_id => current_user.id })
    params.require(:score).permit(:score,:user_id)
  end
end
