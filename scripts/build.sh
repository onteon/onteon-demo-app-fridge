docker build -f docker/Dockerfile -t onteon/demo-app-fridge:1.0.0 .

mkdir -p build/onteon-demo-app-fridge/docker/bin
mkdir -p build/onteon-demo-app-fridge/docker/conf
cp onteon-files/conf/docker-conf.yml build/onteon-demo-app-fridge/docker/conf/conf.yml
cd build/onteon-demo-app-fridge/docker && tar -zcvf ../../onteon-demo-app-fridge-docker.tar.gz *