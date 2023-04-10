# frozen_string_literal: true

class TasksController < ApplicationController
  def index
    @tasks = Task.recently_created.all.page(params[:page])
    @statuses = Status.all
  end
end
