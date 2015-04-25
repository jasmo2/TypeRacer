class CustomFailure < Devise::FailureApp
  def redirect_url
    new_user_session_url(:subdomain => 'secure')
  end

  def respond
    if http_auth?
      http_auth
    else
      # store_location!
      flash[:alert] = "Por favor revisa el usuario o contraseña"
      redirect_to root_path
    end
  end
end