# config valid only for current version of Capistrano
lock '3.4.0'

set :application, 'portfolio'
set :repo_url, 'git@gitlab.com:WillyPoteloin/Swarmest.git'

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, '/var/www/my_app_name'

# Default value for :scm is :git
# set :scm, :git

# Default value for :format is :pretty
# set :format, :pretty

# Default value for :log_level is :debug
# set :log_level, :debug

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# set :linked_files, fetch(:linked_files, []).push('config/database.yml', 'config/secrets.yml')

# Default value for linked_dirs is []
# set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system')

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
# set :keep_releases, 5
#

set :copy_files, ['.node_modules']
set :copy_file_flags, ""
set :copy_dir_flags, "-R"

namespace :deploy do

    desc "Install npm dependencies and build application"
    task :npm_build do
        on roles(:web) do |host|
            execute "cd #{release_path} && npm install && npm run build:prod"
            info "Installing npm dependencies and building the app"
        end
    end

    before :updated, :npm_build
end
