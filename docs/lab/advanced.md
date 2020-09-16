---
id: advanced
title: Advanced Usage
---


## Change spec of virtual machine

You can upload the cpus and memory allocated to your VM by providing extra configuration in your Vagrantfile:

```ruby
  config.vm.provider "virtualbox" do |v|
    v.memory = 4096
    v.cpus = 4
  end
```

For example:

```ruby
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.provider "virtualbox" do |v|
    v.memory = 4096
    v.cpus = 4
  end

  config.vm.box = "chris-snow/kubedirector-lab"
  config.vm.box_version = "0.0.3-20200904"

  config.vm.network "forwarded_port", guest: 3000, host: 3001

  config.vm.synced_folder '.', '/vagrant', disabled: true
  config.vm.synced_folder "./kubedirector", "/vagrant/src/github.com/bluek8s/kubedirector", owner: "vagrant", group: "vagrant"

  config.vm.provision "shell", privileged: false, inline: <<-SCRIPT
    sudo chmod 777 /vagrant/
  SCRIPT

end
```

Run `vagrant reload` for changes in the Vagrantfile to take effect.
