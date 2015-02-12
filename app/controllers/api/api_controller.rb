module Api
  class ApiController < ApplicationController
    before_action :require_user!
  end
end
