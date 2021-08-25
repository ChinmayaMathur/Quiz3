class ApplicationController < ActionController::Base
      def current_user
            @current_user ||= User.find_by_id session[:user_id]
      end
      helper_method :current_user #this method can now be called from both the controllers and the views

       def user_signed_in?
             current_user.present? #return true or false 
      end
      helper_method :user_signed_in?

      def authenticate_user! #redirect if the user is not signed in
             redirect_to new_sessions_path, notice: 'Please sign in' unless user_signed_in?
      end
      helper_method :authenticate_user!

end
