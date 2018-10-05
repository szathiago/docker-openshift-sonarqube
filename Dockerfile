FROM docker.io/centos:7
LABEL maintainer="Wolfgang Kulhanek <WolfgangKulhanek@gmail.com>"

ENV SONAR_VERSION=6.3 \
    SONARQUBE_HOME=/opt/sonarqube

LABEL name="SonarQube" \
      io.k8s.display-name="SonarQube" \
      io.k8s.description="Provide a SonarQube image to run on Red Hat OpenShift" \
      io.openshift.expose-services="9000" \
      io.openshift.tags="sonarqube" \
      build-date="2018-08-09" \
      version=$SONAR_VERSION \
      release="1"

USER root
EXPOSE 9000
RUN yum -y install epel-release \
    && yum repolist \
    && yum -y update \
    && yum -y install nodejs && npm config set registry https://nexus.bvnet.bv/repository/npm-group/ && npm config set strict-ssl false && npm install tslint typescript -g && yum -y install unzip java-1.8.0-openjdk nss_wrapper \
    && yum clean all \
    && rm -rf /var/cache/yum \
    && cd /tmp \
    && curl -o sonarqube.zip -fSL https://sonarsource.bintray.com/Distribution/sonarqube/sonarqube-$SONAR_VERSION.zip \
    && cd /opt \
    && unzip /tmp/sonarqube.zip \
    && mv sonarqube-$SONAR_VERSION sonarqube \
    && cd sonarqube/extensions/plugins && curl -o sonar-typescript-plugin-1.1.0.jar -fSL https://github.com/Pablissimo/SonarTsPlugin/releases/download/v1.1.0/sonar-typescript-plugin-1.1.0.jar \
    && rm /tmp/sonarqube.zip*
ADD root /

RUN useradd -r sonar \
    && chmod 775 $SONARQUBE_HOME/bin/run_sonarqube.sh \
    && /usr/bin/fix-permissions /opt/sonarqube

USER sonar
WORKDIR $SONARQUBE_HOME
VOLUME $SONARQUBE_HOME/data

ENTRYPOINT ["./bin/run_sonarqube.sh"]
