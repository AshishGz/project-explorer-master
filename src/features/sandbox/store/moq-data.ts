// tslint:disable
export const moqBPMNData = [
  {
    title: 'Acquisitions',
    xml: `<?xml version="1.0" encoding="UTF-8"?>
    <bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="1.11.3">
      <bpmn:collaboration id="Collaboration_19966z0">
        <bpmn:participant id="Participant_0gfrpfn" name="Site Validation" processRef="Process_1" />
      </bpmn:collaboration>
      <bpmn:process id="Process_1" isExecutable="true">
        <bpmn:laneSet>
          <bpmn:lane id="Lane_0j9x1sv" name="Acquisitions">
            <bpmn:flowNodeRef>Task_0i9wvom</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>EndEvent_187k9eb</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>ExclusiveGateway_1jcv6x0</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>IntermediateThrowEvent_0atvbw6</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>ExclusiveGateway_1vsclvn</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>ExclusiveGateway_0o82ozd</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>SecureSite</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>ExclusiveGateway_0yrarnj</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>ConfirmFeasibility</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>ExclusiveGateway_07eyza0</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>Task_03mh39a</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>Task_10hie64</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>ExclusiveGateway_0r3jh0u</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>EndEvent_1biaeaj</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>ExclusiveGateway_0wm8q7u</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>InitialFeasibility</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>MyHappyTask</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>StartEvent_1</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>Task_1c80y6y</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>ExclusiveGateway_0y5w0o6</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>ExclusiveGateway_0hqhykm</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>ExclusiveGateway_1f9u3um</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>EndEvent_1ou56e0</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>EndEvent_0euya2t</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>ManagerSignOff</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>Task_1wrxg1j</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>Task_0x15nqk</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>Task_0to3gu0</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>Task_1ncc0lm</bpmn:flowNodeRef>
            <bpmn:flowNodeRef>Task_18sa97f</bpmn:flowNodeRef>
          </bpmn:lane>
        </bpmn:laneSet>
        <bpmn:sequenceFlow id="SequenceFlow_0q4tbo4" sourceRef="ExclusiveGateway_0r3jh0u" targetRef="Task_0i9wvom" />
        <bpmn:userTask id="Task_0i9wvom" name="Do Site Inspection" camunda:assignee="MyHappyTask.AssignedTo === 12">
          <bpmn:incoming>SequenceFlow_0q4tbo4</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_1c2ibzk</bpmn:outgoing>
        </bpmn:userTask>
        <bpmn:sequenceFlow id="SequenceFlow_1c2ibzk" sourceRef="Task_0i9wvom" targetRef="ExclusiveGateway_07eyza0" />
        <bpmn:sequenceFlow id="SequenceFlow_1cn40us" sourceRef="ExclusiveGateway_0y5w0o6" targetRef="Task_0x15nqk" />
        <bpmn:sequenceFlow id="SequenceFlow_1bg1mc2" sourceRef="ExclusiveGateway_0y5w0o6" targetRef="Task_1wrxg1j" />
        <bpmn:sequenceFlow id="SequenceFlow_1ekqjxa" sourceRef="ExclusiveGateway_0y5w0o6" targetRef="ManagerSignOff" />
        <bpmn:sequenceFlow id="SequenceFlow_0eduwao" sourceRef="ExclusiveGateway_0hqhykm" targetRef="ExclusiveGateway_1f9u3um" />
        <bpmn:sequenceFlow id="SequenceFlow_02puxf6" sourceRef="Task_1ncc0lm" targetRef="ExclusiveGateway_0y5w0o6" />
        <bpmn:sequenceFlow id="SequenceFlow_13x3gns" sourceRef="ExclusiveGateway_1jcv6x0" targetRef="EndEvent_187k9eb" />
        <bpmn:sequenceFlow id="SequenceFlow_0i0leor" sourceRef="Task_18sa97f" targetRef="EndEvent_1ou56e0" />
        <bpmn:sequenceFlow id="SequenceFlow_1r8kijy" name="No" sourceRef="ExclusiveGateway_1f9u3um" targetRef="Task_18sa97f" />
        <bpmn:sequenceFlow id="SequenceFlow_0mp3zd1" name="Yes" sourceRef="ExclusiveGateway_1f9u3um" targetRef="EndEvent_0euya2t">
          <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">this.ManagerSignOff.manager_sign_off === true</bpmn:conditionExpression>
        </bpmn:sequenceFlow>
        <bpmn:sequenceFlow id="SequenceFlow_0vqcycu" sourceRef="ExclusiveGateway_1vsclvn" targetRef="ExclusiveGateway_1jcv6x0" />
        <bpmn:sequenceFlow id="SequenceFlow_1njo58m" name="No" sourceRef="ExclusiveGateway_1vsclvn" targetRef="IntermediateThrowEvent_0atvbw6">
          <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">this.SecureSite.site_sold === false</bpmn:conditionExpression>
        </bpmn:sequenceFlow>
        <bpmn:sequenceFlow id="SequenceFlow_1kjxn6h" name="No" sourceRef="ExclusiveGateway_0o82ozd" targetRef="ExclusiveGateway_1vsclvn" />
        <bpmn:sequenceFlow id="SequenceFlow_0l4lk5c" name="Yes" sourceRef="ExclusiveGateway_0o82ozd" targetRef="Task_1ncc0lm">
          <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">this.SecureSite.site_secured === true</bpmn:conditionExpression>
        </bpmn:sequenceFlow>
        <bpmn:sequenceFlow id="SequenceFlow_1tpbv7o" sourceRef="SecureSite" targetRef="ExclusiveGateway_0o82ozd" />
        <bpmn:sequenceFlow id="SequenceFlow_0e5ywnv" sourceRef="IntermediateThrowEvent_0atvbw6" targetRef="SecureSite" />
        <bpmn:sequenceFlow id="SequenceFlow_1yx2iu8" name="Yes" sourceRef="ExclusiveGateway_0yrarnj" targetRef="SecureSite">
          <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">this.ConfirmFeasibility.site_feasible === true</bpmn:conditionExpression>
        </bpmn:sequenceFlow>
        <bpmn:sequenceFlow id="SequenceFlow_112muza" name="No" sourceRef="ExclusiveGateway_0yrarnj" targetRef="ExclusiveGateway_1jcv6x0" />
        <bpmn:sequenceFlow id="SequenceFlow_15hspe6" sourceRef="ConfirmFeasibility" targetRef="ExclusiveGateway_0yrarnj" />
        <bpmn:sequenceFlow id="SequenceFlow_032t4pr" sourceRef="ExclusiveGateway_07eyza0" targetRef="ConfirmFeasibility" />
        <bpmn:sequenceFlow id="SequenceFlow_0jjtx3d" sourceRef="Task_03mh39a" targetRef="ExclusiveGateway_07eyza0" />
        <bpmn:sequenceFlow id="SequenceFlow_0x67n85" sourceRef="Task_10hie64" targetRef="ExclusiveGateway_07eyza0" />
        <bpmn:sequenceFlow id="SequenceFlow_06n81em" sourceRef="ExclusiveGateway_0r3jh0u" targetRef="Task_10hie64" />
        <bpmn:sequenceFlow id="SequenceFlow_089i8li" sourceRef="ExclusiveGateway_0r3jh0u" targetRef="Task_03mh39a" />
        <bpmn:sequenceFlow id="SequenceFlow_1vvaei5" name="No" sourceRef="ExclusiveGateway_0wm8q7u" targetRef="EndEvent_1biaeaj" />
        <bpmn:sequenceFlow id="SequenceFlow_0dj5u47" name="Yes" sourceRef="ExclusiveGateway_0wm8q7u" targetRef="ExclusiveGateway_0r3jh0u">
          <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">this.InitialFeasibility.has_completed_initial_feasibility === true</bpmn:conditionExpression>
        </bpmn:sequenceFlow>
        <bpmn:sequenceFlow id="SequenceFlow_0h4p7vt" sourceRef="InitialFeasibility" targetRef="ExclusiveGateway_0wm8q7u" />
        <bpmn:sequenceFlow id="SequenceFlow_1snw5ca" sourceRef="MyHappyTask" targetRef="InitialFeasibility" />
        <bpmn:sequenceFlow id="SequenceFlow_0lsdbta" sourceRef="Task_1c80y6y" targetRef="MyHappyTask" />
        <bpmn:sequenceFlow id="SequenceFlow_0p4gdtv" sourceRef="StartEvent_1" targetRef="Task_1c80y6y" />
        <bpmn:endEvent id="EndEvent_187k9eb" name="Archive Site">
          <bpmn:incoming>SequenceFlow_13x3gns</bpmn:incoming>
        </bpmn:endEvent>
        <bpmn:exclusiveGateway id="ExclusiveGateway_1jcv6x0">
          <bpmn:incoming>SequenceFlow_112muza</bpmn:incoming>
          <bpmn:incoming>SequenceFlow_0vqcycu</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_13x3gns</bpmn:outgoing>
        </bpmn:exclusiveGateway>
        <bpmn:intermediateCatchEvent id="IntermediateThrowEvent_0atvbw6" name="2 weeks">
          <bpmn:incoming>SequenceFlow_1njo58m</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_0e5ywnv</bpmn:outgoing>
          <bpmn:timerEventDefinition />
        </bpmn:intermediateCatchEvent>
        <bpmn:exclusiveGateway id="ExclusiveGateway_1vsclvn" name="Is the Site Sold?" default="SequenceFlow_0vqcycu">
          <bpmn:incoming>SequenceFlow_1kjxn6h</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_1njo58m</bpmn:outgoing>
          <bpmn:outgoing>SequenceFlow_0vqcycu</bpmn:outgoing>
        </bpmn:exclusiveGateway>
        <bpmn:exclusiveGateway id="ExclusiveGateway_0o82ozd" name="Did we secure the Property?" default="SequenceFlow_1kjxn6h">
          <bpmn:incoming>SequenceFlow_1tpbv7o</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_0l4lk5c</bpmn:outgoing>
          <bpmn:outgoing>SequenceFlow_1kjxn6h</bpmn:outgoing>
        </bpmn:exclusiveGateway>
        <bpmn:userTask id="SecureSite" name="Secure Site" camunda:formKey="Project">
          <bpmn:extensionElements>
            <camunda:formData>
              <camunda:formField id="site_secured" label="Site Secured" type="boolean" />
              <camunda:formField id="site_sold" label="Site Sold" type="boolean" />
            </camunda:formData>
          </bpmn:extensionElements>
          <bpmn:incoming>SequenceFlow_1yx2iu8</bpmn:incoming>
          <bpmn:incoming>SequenceFlow_0e5ywnv</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_1tpbv7o</bpmn:outgoing>
        </bpmn:userTask>
        <bpmn:exclusiveGateway id="ExclusiveGateway_0yrarnj" name="Do we Proceed to Contract?" default="SequenceFlow_112muza">
          <bpmn:incoming>SequenceFlow_15hspe6</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_112muza</bpmn:outgoing>
          <bpmn:outgoing>SequenceFlow_1yx2iu8</bpmn:outgoing>
        </bpmn:exclusiveGateway>
        <bpmn:userTask id="ConfirmFeasibility" name="Confirm Feasibility" camunda:formKey="Project">
          <bpmn:extensionElements>
            <camunda:formData>
              <camunda:formField id="site_feasibile" label="Confirm Site Feasible" type="boolean" />
            </camunda:formData>
          </bpmn:extensionElements>
          <bpmn:incoming>SequenceFlow_032t4pr</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_15hspe6</bpmn:outgoing>
        </bpmn:userTask>
        <bpmn:parallelGateway id="ExclusiveGateway_07eyza0">
          <bpmn:incoming>SequenceFlow_0x67n85</bpmn:incoming>
          <bpmn:incoming>SequenceFlow_0jjtx3d</bpmn:incoming>
          <bpmn:incoming>SequenceFlow_1c2ibzk</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_032t4pr</bpmn:outgoing>
        </bpmn:parallelGateway>
        <bpmn:userTask id="Task_03mh39a" name="Dial Before you Dig">
          <bpmn:incoming>SequenceFlow_089i8li</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_0jjtx3d</bpmn:outgoing>
        </bpmn:userTask>
        <bpmn:userTask id="Task_10hie64" name="Council Town Planning Advice">
          <bpmn:incoming>SequenceFlow_06n81em</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_0x67n85</bpmn:outgoing>
        </bpmn:userTask>
        <bpmn:parallelGateway id="ExclusiveGateway_0r3jh0u">
          <bpmn:incoming>SequenceFlow_0dj5u47</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_089i8li</bpmn:outgoing>
          <bpmn:outgoing>SequenceFlow_0q4tbo4</bpmn:outgoing>
          <bpmn:outgoing>SequenceFlow_06n81em</bpmn:outgoing>
        </bpmn:parallelGateway>
        <bpmn:endEvent id="EndEvent_1biaeaj" name="Archive Site">
          <bpmn:incoming>SequenceFlow_1vvaei5</bpmn:incoming>
        </bpmn:endEvent>
        <bpmn:exclusiveGateway id="ExclusiveGateway_0wm8q7u" name="Does the Site Stack up ?" default="SequenceFlow_1vvaei5">
          <bpmn:incoming>SequenceFlow_0h4p7vt</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_0dj5u47</bpmn:outgoing>
          <bpmn:outgoing>SequenceFlow_1vvaei5</bpmn:outgoing>
        </bpmn:exclusiveGateway>
        <bpmn:userTask id="InitialFeasibility" name="Do Inital Feasibility" camunda:formKey="Projects">
          <bpmn:extensionElements>
            <camunda:formData>
              <camunda:formField id="has_completed_initial_feasibility" label="Site Feasible" type="boolean" />
            </camunda:formData>
          </bpmn:extensionElements>
          <bpmn:incoming>SequenceFlow_1snw5ca</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_0h4p7vt</bpmn:outgoing>
        </bpmn:userTask>
        <bpmn:userTask id="MyHappyTask" name="Do Site Check">
          <bpmn:extensionElements>
            <camunda:formData />
          </bpmn:extensionElements>
          <bpmn:incoming>SequenceFlow_0lsdbta</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_1snw5ca</bpmn:outgoing>
        </bpmn:userTask>
        <bpmn:startEvent id="StartEvent_1" name="Site Found">
          <bpmn:outgoing>SequenceFlow_0p4gdtv</bpmn:outgoing>
        </bpmn:startEvent>
        <bpmn:userTask id="Task_1c80y6y" name="Capture Site Details">
          <bpmn:incoming>SequenceFlow_0p4gdtv</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_0lsdbta</bpmn:outgoing>
        </bpmn:userTask>
        <bpmn:parallelGateway id="ExclusiveGateway_0y5w0o6">
          <bpmn:incoming>SequenceFlow_02puxf6</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_1cn40us</bpmn:outgoing>
          <bpmn:outgoing>SequenceFlow_1bg1mc2</bpmn:outgoing>
          <bpmn:outgoing>SequenceFlow_1ekqjxa</bpmn:outgoing>
        </bpmn:parallelGateway>
        <bpmn:parallelGateway id="ExclusiveGateway_0hqhykm">
          <bpmn:incoming>SequenceFlow_1h6pt2c</bpmn:incoming>
          <bpmn:incoming>SequenceFlow_13b4v3o</bpmn:incoming>
          <bpmn:incoming>SequenceFlow_09xa791</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_0eduwao</bpmn:outgoing>
        </bpmn:parallelGateway>
        <bpmn:sequenceFlow id="SequenceFlow_1h6pt2c" sourceRef="Task_1wrxg1j" targetRef="ExclusiveGateway_0hqhykm" />
        <bpmn:sequenceFlow id="SequenceFlow_13b4v3o" sourceRef="ManagerSignOff" targetRef="ExclusiveGateway_0hqhykm" />
        <bpmn:sequenceFlow id="SequenceFlow_09xa791" sourceRef="Task_0to3gu0" targetRef="ExclusiveGateway_0hqhykm" />
        <bpmn:sequenceFlow id="SequenceFlow_11cghbi" sourceRef="Task_0x15nqk" targetRef="Task_0to3gu0" />
        <bpmn:exclusiveGateway id="ExclusiveGateway_1f9u3um" name="Manager Sign Off?" default="SequenceFlow_1r8kijy">
          <bpmn:incoming>SequenceFlow_0eduwao</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_0mp3zd1</bpmn:outgoing>
          <bpmn:outgoing>SequenceFlow_1r8kijy</bpmn:outgoing>
        </bpmn:exclusiveGateway>
        <bpmn:endEvent id="EndEvent_1ou56e0" name="Archive Site">
          <bpmn:incoming>SequenceFlow_0i0leor</bpmn:incoming>
        </bpmn:endEvent>
        <bpmn:endEvent id="EndEvent_0euya2t" name="Site Unconditional">
          <bpmn:incoming>SequenceFlow_0mp3zd1</bpmn:incoming>
        </bpmn:endEvent>
        <bpmn:userTask id="ManagerSignOff" name="Confirm Feasibility" camunda:formKey="Project">
          <bpmn:extensionElements>
            <camunda:formData>
              <camunda:formField id="manager_sign_off" label="Manager Sign off" type="boolean" />
            </camunda:formData>
          </bpmn:extensionElements>
          <bpmn:incoming>SequenceFlow_1ekqjxa</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_13b4v3o</bpmn:outgoing>
        </bpmn:userTask>
        <bpmn:userTask id="Task_1wrxg1j" name="Town Planner Review">
          <bpmn:incoming>SequenceFlow_1bg1mc2</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_1h6pt2c</bpmn:outgoing>
        </bpmn:userTask>
        <bpmn:userTask id="Task_0x15nqk" name="Do CMA">
          <bpmn:incoming>SequenceFlow_1cn40us</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_11cghbi</bpmn:outgoing>
        </bpmn:userTask>
        <bpmn:userTask id="Task_0to3gu0" name="Price Justification">
          <bpmn:extensionElements>
            <camunda:formData />
          </bpmn:extensionElements>
          <bpmn:incoming>SequenceFlow_11cghbi</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_09xa791</bpmn:outgoing>
        </bpmn:userTask>
        <bpmn:userTask id="Task_1ncc0lm" name="Pay Deposit">
          <bpmn:incoming>SequenceFlow_0l4lk5c</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_02puxf6</bpmn:outgoing>
        </bpmn:userTask>
        <bpmn:userTask id="Task_18sa97f" name="Retrieve Deposit">
          <bpmn:incoming>SequenceFlow_1r8kijy</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_0i0leor</bpmn:outgoing>
        </bpmn:userTask>
      </bpmn:process>
      <bpmndi:BPMNDiagram id="BPMNDiagram_1">
        <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_19966z0">
          <bpmndi:BPMNShape id="Participant_0gfrpfn_di" bpmnElement="Participant_0gfrpfn">
            <dc:Bounds x="14" y="60" width="3266" height="472" />
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
            <dc:Bounds x="88" y="255" width="36" height="36" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="80" y="291" width="52" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape id="Lane_0j9x1sv_di" bpmnElement="Lane_0j9x1sv">
            <dc:Bounds x="44" y="60" width="3236" height="472" />
          </bpmndi:BPMNShape>
          <bpmndi:BPMNEdge id="SequenceFlow_0p4gdtv_di" bpmnElement="SequenceFlow_0p4gdtv">
            <di:waypoint xsi:type="dc:Point" x="124" y="273" />
            <di:waypoint xsi:type="dc:Point" x="154" y="273" />
            <di:waypoint xsi:type="dc:Point" x="154" y="273" />
            <di:waypoint xsi:type="dc:Point" x="192" y="273" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="124" y="267" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_0lsdbta_di" bpmnElement="SequenceFlow_0lsdbta">
            <di:waypoint xsi:type="dc:Point" x="292" y="273" />
            <di:waypoint xsi:type="dc:Point" x="341" y="273" />
            <di:waypoint xsi:type="dc:Point" x="341" y="273" />
            <di:waypoint xsi:type="dc:Point" x="366" y="273" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="311" y="267" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_1snw5ca_di" bpmnElement="SequenceFlow_1snw5ca">
            <di:waypoint xsi:type="dc:Point" x="466" y="273" />
            <di:waypoint xsi:type="dc:Point" x="548" y="273" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="462" y="252" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_0h4p7vt_di" bpmnElement="SequenceFlow_0h4p7vt">
            <di:waypoint xsi:type="dc:Point" x="648" y="273" />
            <di:waypoint xsi:type="dc:Point" x="724" y="273" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="641" y="252" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNShape id="EndEvent_187k9eb_di" bpmnElement="EndEvent_187k9eb">
            <dc:Bounds x="1540" y="457" width="36" height="36" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="1527" y="500" width="59" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNEdge id="SequenceFlow_0dj5u47_di" bpmnElement="SequenceFlow_0dj5u47">
            <di:waypoint xsi:type="dc:Point" x="774" y="273" />
            <di:waypoint xsi:type="dc:Point" x="849" y="273" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="802" y="252" width="19" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_0x67n85_di" bpmnElement="SequenceFlow_0x67n85">
            <di:waypoint xsi:type="dc:Point" x="1125" y="273" />
            <di:waypoint xsi:type="dc:Point" x="1259" y="273" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="1147" y="252" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_0jjtx3d_di" bpmnElement="SequenceFlow_0jjtx3d">
            <di:waypoint xsi:type="dc:Point" x="1125" y="390" />
            <di:waypoint xsi:type="dc:Point" x="1284" y="390" />
            <di:waypoint xsi:type="dc:Point" x="1284" y="298" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="1159.5" y="369" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_1c2ibzk_di" bpmnElement="SequenceFlow_1c2ibzk">
            <di:waypoint xsi:type="dc:Point" x="1125" y="160" />
            <di:waypoint xsi:type="dc:Point" x="1284" y="160" />
            <di:waypoint xsi:type="dc:Point" x="1284" y="248" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="1159.5" y="139" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNShape id="ParallelGateway_05hm7dl_di" bpmnElement="ExclusiveGateway_07eyza0">
            <dc:Bounds x="1259" y="248" width="50" height="50" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="1239" y="302" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNEdge id="SequenceFlow_089i8li_di" bpmnElement="SequenceFlow_089i8li">
            <di:waypoint xsi:type="dc:Point" x="874" y="298" />
            <di:waypoint xsi:type="dc:Point" x="874" y="390" />
            <di:waypoint xsi:type="dc:Point" x="1025" y="390" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="844" y="338" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_0q4tbo4_di" bpmnElement="SequenceFlow_0q4tbo4">
            <di:waypoint xsi:type="dc:Point" x="874" y="248" />
            <di:waypoint xsi:type="dc:Point" x="874" y="160" />
            <di:waypoint xsi:type="dc:Point" x="1025" y="160" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="844" y="198" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_06n81em_di" bpmnElement="SequenceFlow_06n81em">
            <di:waypoint xsi:type="dc:Point" x="899" y="273" />
            <di:waypoint xsi:type="dc:Point" x="1025" y="273" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="917" y="252" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNShape id="ParallelGateway_08zoo7d_di" bpmnElement="ExclusiveGateway_0r3jh0u">
            <dc:Bounds x="849" y="248" width="50" height="50" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="829" y="302" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNEdge id="SequenceFlow_032t4pr_di" bpmnElement="SequenceFlow_032t4pr">
            <di:waypoint xsi:type="dc:Point" x="1309" y="273" />
            <di:waypoint xsi:type="dc:Point" x="1436" y="273" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="1327.5" y="252" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_15hspe6_di" bpmnElement="SequenceFlow_15hspe6">
            <di:waypoint xsi:type="dc:Point" x="1536" y="273" />
            <di:waypoint xsi:type="dc:Point" x="1629" y="273" />
            <di:waypoint xsi:type="dc:Point" x="1629" y="273" />
            <di:waypoint xsi:type="dc:Point" x="1649" y="273" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="1599" y="267" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNShape id="EndEvent_1biaeaj_di" bpmnElement="EndEvent_1biaeaj">
            <dc:Bounds x="731" y="355" width="36" height="36" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="720" y="395" width="59" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNEdge id="SequenceFlow_1vvaei5_di" bpmnElement="SequenceFlow_1vvaei5">
            <di:waypoint xsi:type="dc:Point" x="750" y="297" />
            <di:waypoint xsi:type="dc:Point" x="749" y="355" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="729.0000000000002" y="316" width="14" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_112muza_di" bpmnElement="SequenceFlow_112muza">
            <di:waypoint xsi:type="dc:Point" x="1674" y="298" />
            <di:waypoint xsi:type="dc:Point" x="1674" y="450" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="1642" y="301" width="15" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_1yx2iu8_di" bpmnElement="SequenceFlow_1yx2iu8">
            <di:waypoint xsi:type="dc:Point" x="1699" y="273" />
            <di:waypoint xsi:type="dc:Point" x="1821" y="273" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="1722" y="253" width="19" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_1tpbv7o_di" bpmnElement="SequenceFlow_1tpbv7o">
            <di:waypoint xsi:type="dc:Point" x="1921" y="273" />
            <di:waypoint xsi:type="dc:Point" x="2072" y="273" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="1951.5" y="252" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNShape id="ParallelGateway_0f496zr_di" bpmnElement="ExclusiveGateway_0y5w0o6">
            <dc:Bounds x="2444" y="248" width="50" height="50" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="2424" y="302" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNEdge id="SequenceFlow_1cn40us_di" bpmnElement="SequenceFlow_1cn40us">
            <di:waypoint xsi:type="dc:Point" x="2469" y="248" />
            <di:waypoint xsi:type="dc:Point" x="2469" y="163" />
            <di:waypoint xsi:type="dc:Point" x="2560" y="163" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="2439" y="199.5" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_1bg1mc2_di" bpmnElement="SequenceFlow_1bg1mc2">
            <di:waypoint xsi:type="dc:Point" x="2494" y="273" />
            <di:waypoint xsi:type="dc:Point" x="2560" y="273" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="2482" y="252" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_1ekqjxa_di" bpmnElement="SequenceFlow_1ekqjxa">
            <di:waypoint xsi:type="dc:Point" x="2469" y="298" />
            <di:waypoint xsi:type="dc:Point" x="2469" y="379" />
            <di:waypoint xsi:type="dc:Point" x="2560" y="379" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="2439" y="332.5" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_11cghbi_di" bpmnElement="SequenceFlow_11cghbi">
            <di:waypoint xsi:type="dc:Point" x="2660" y="163" />
            <di:waypoint xsi:type="dc:Point" x="2719" y="163" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="2644.5" y="142" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_1h6pt2c_di" bpmnElement="SequenceFlow_1h6pt2c">
            <di:waypoint xsi:type="dc:Point" x="2660" y="273" />
            <di:waypoint xsi:type="dc:Point" x="2857" y="273" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="2713.5" y="252" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_13b4v3o_di" bpmnElement="SequenceFlow_13b4v3o">
            <di:waypoint xsi:type="dc:Point" x="2660" y="379" />
            <di:waypoint xsi:type="dc:Point" x="2881" y="379" />
            <di:waypoint xsi:type="dc:Point" x="2881" y="297" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="2725.5" y="358" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNShape id="ParallelGateway_0e34u5o_di" bpmnElement="ExclusiveGateway_0hqhykm">
            <dc:Bounds x="2857" y="248" width="50" height="50" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="2836" y="302" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNEdge id="SequenceFlow_09xa791_di" bpmnElement="SequenceFlow_09xa791">
            <di:waypoint xsi:type="dc:Point" x="2819" y="163" />
            <di:waypoint xsi:type="dc:Point" x="2882" y="163" />
            <di:waypoint xsi:type="dc:Point" x="2882" y="248" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="2805.5" y="142" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_0l4lk5c_di" bpmnElement="SequenceFlow_0l4lk5c">
            <di:waypoint xsi:type="dc:Point" x="2122" y="273" />
            <di:waypoint xsi:type="dc:Point" x="2221" y="273" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="2163" y="252" width="19" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNShape id="UserTask_0nvhgbq_di" bpmnElement="Task_1c80y6y">
            <dc:Bounds x="192" y="233" width="100" height="80" />
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape id="UserTask_1ib6p97_di" bpmnElement="MyHappyTask">
            <dc:Bounds x="366" y="233" width="100" height="80" />
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape id="UserTask_1rex66h_di" bpmnElement="InitialFeasibility">
            <dc:Bounds x="548" y="233" width="100" height="80" />
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape id="UserTask_1t7pgib_di" bpmnElement="Task_0i9wvom">
            <dc:Bounds x="1025" y="120" width="100" height="80" />
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape id="UserTask_05s8w95_di" bpmnElement="Task_10hie64">
            <dc:Bounds x="1025" y="233" width="100" height="80" />
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape id="UserTask_07xcb5v_di" bpmnElement="Task_03mh39a">
            <dc:Bounds x="1025" y="350" width="100" height="80" />
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape id="UserTask_0jl0iy1_di" bpmnElement="ConfirmFeasibility">
            <dc:Bounds x="1436" y="233" width="100" height="80" />
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape id="UserTask_1i81hdz_di" bpmnElement="SecureSite">
            <dc:Bounds x="1821" y="233" width="100" height="80" />
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape id="ExclusiveGateway_1n7aoc1_di" bpmnElement="ExclusiveGateway_0wm8q7u" isMarkerVisible="true">
            <dc:Bounds x="724" y="248" width="50" height="50" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="716" y="220" width="65" height="24" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape id="ExclusiveGateway_0bi7d5b_di" bpmnElement="ExclusiveGateway_0yrarnj" isMarkerVisible="true">
            <dc:Bounds x="1649" y="248" width="50" height="50" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="1631" y="215" width="88" height="24" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape id="ExclusiveGateway_1vrr0xy_di" bpmnElement="ExclusiveGateway_0o82ozd" isMarkerVisible="true">
            <dc:Bounds x="2072" y="248" width="50" height="50" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="1996" y="295" width="88" height="24" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNEdge id="SequenceFlow_1kjxn6h_di" bpmnElement="SequenceFlow_1kjxn6h">
            <di:waypoint xsi:type="dc:Point" x="2097" y="298" />
            <di:waypoint xsi:type="dc:Point" x="2097" y="373" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="2104" y="325" width="14" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNShape id="IntermediateCatchEvent_0ycahfb_di" bpmnElement="IntermediateThrowEvent_0atvbw6">
            <dc:Bounds x="1853" y="380" width="36" height="36" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="1851" y="420" width="41" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape id="ExclusiveGateway_1vsclvn_di" bpmnElement="ExclusiveGateway_1vsclvn" isMarkerVisible="true">
            <dc:Bounds x="2072" y="373" width="50" height="50" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="2131" y="392" width="78" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNEdge id="SequenceFlow_1njo58m_di" bpmnElement="SequenceFlow_1njo58m">
            <di:waypoint xsi:type="dc:Point" x="2072" y="398" />
            <di:waypoint xsi:type="dc:Point" x="1889" y="398" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="1979.5555555555557" y="401.48794063079777" width="14" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_0e5ywnv_di" bpmnElement="SequenceFlow_0e5ywnv">
            <di:waypoint xsi:type="dc:Point" x="1871" y="380" />
            <di:waypoint xsi:type="dc:Point" x="1871" y="313" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="1841" y="340.5" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNShape id="ExclusiveGateway_1f9u3um_di" bpmnElement="ExclusiveGateway_1f9u3um" isMarkerVisible="true">
            <dc:Bounds x="2993" y="248" width="50" height="50" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="3034" y="286" width="67" height="24" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNEdge id="SequenceFlow_0eduwao_di" bpmnElement="SequenceFlow_0eduwao">
            <di:waypoint xsi:type="dc:Point" x="2907" y="273" />
            <di:waypoint xsi:type="dc:Point" x="2958" y="273" />
            <di:waypoint xsi:type="dc:Point" x="2958" y="273" />
            <di:waypoint xsi:type="dc:Point" x="2993" y="273" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="2928" y="267" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_0mp3zd1_di" bpmnElement="SequenceFlow_0mp3zd1">
            <di:waypoint xsi:type="dc:Point" x="3043" y="273" />
            <di:waypoint xsi:type="dc:Point" x="3139" y="273" />
            <di:waypoint xsi:type="dc:Point" x="3139" y="273" />
            <di:waypoint xsi:type="dc:Point" x="3183" y="273" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="3073.364406779661" y="252" width="19" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_1r8kijy_di" bpmnElement="SequenceFlow_1r8kijy">
            <di:waypoint xsi:type="dc:Point" x="3018" y="298" />
            <di:waypoint xsi:type="dc:Point" x="3018" y="342" />
            <di:waypoint xsi:type="dc:Point" x="3018" y="342" />
            <di:waypoint xsi:type="dc:Point" x="3018" y="386" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="3026" y="336" width="14" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNShape id="EndEvent_1ou56e0_di" bpmnElement="EndEvent_1ou56e0">
            <dc:Bounds x="3183" y="408" width="36" height="36" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="3172" y="448" width="59" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNEdge id="SequenceFlow_0i0leor_di" bpmnElement="SequenceFlow_0i0leor">
            <di:waypoint xsi:type="dc:Point" x="3068" y="426" />
            <di:waypoint xsi:type="dc:Point" x="3183" y="426" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="3080.5" y="405" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNShape id="EndEvent_0euya2t_di" bpmnElement="EndEvent_0euya2t">
            <dc:Bounds x="3183" y="255" width="36" height="36" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="3159" y="295" width="87" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape id="ExclusiveGateway_1jcv6x0_di" bpmnElement="ExclusiveGateway_1jcv6x0" isMarkerVisible="true">
            <dc:Bounds x="1648.6910569105692" y="450" width="50" height="50" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="1673.6910569105692" y="504" width="0" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNEdge id="SequenceFlow_13x3gns_di" bpmnElement="SequenceFlow_13x3gns">
            <di:waypoint xsi:type="dc:Point" x="1649" y="475" />
            <di:waypoint xsi:type="dc:Point" x="1608" y="475" />
            <di:waypoint xsi:type="dc:Point" x="1608" y="475" />
            <di:waypoint xsi:type="dc:Point" x="1576" y="475" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="1623" y="469" width="0" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_0vqcycu_di" bpmnElement="SequenceFlow_0vqcycu">
            <di:waypoint xsi:type="dc:Point" x="2097" y="423" />
            <di:waypoint xsi:type="dc:Point" x="2097" y="475" />
            <di:waypoint xsi:type="dc:Point" x="1699" y="475" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="2067" y="443" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_02puxf6_di" bpmnElement="SequenceFlow_02puxf6">
            <di:waypoint xsi:type="dc:Point" x="2321" y="273" />
            <di:waypoint xsi:type="dc:Point" x="2444" y="273" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="2382.5" y="252" width="0" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNShape id="UserTask_0123f1v_di" bpmnElement="ManagerSignOff">
            <dc:Bounds x="2560" y="339" width="100" height="80" />
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape id="UserTask_0k4arau_di" bpmnElement="Task_1wrxg1j">
            <dc:Bounds x="2560" y="233" width="100" height="80" />
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape id="UserTask_0fqifwv_di" bpmnElement="Task_0x15nqk">
            <dc:Bounds x="2560" y="123" width="100" height="80" />
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape id="UserTask_1n6vkru_di" bpmnElement="Task_0to3gu0">
            <dc:Bounds x="2719" y="123" width="100" height="80" />
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape id="UserTask_04x7xdi_di" bpmnElement="Task_1ncc0lm">
            <dc:Bounds x="2221" y="233" width="100" height="80" />
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape id="UserTask_1e1zals_di" bpmnElement="Task_18sa97f">
            <dc:Bounds x="2968" y="386" width="100" height="80" />
          </bpmndi:BPMNShape>
        </bpmndi:BPMNPlane>
      </bpmndi:BPMNDiagram>
    </bpmn:definitions>
    `,
  },
  {
    title: 'Work Complete',
    xml: `<?xml version="1.0" encoding="UTF-8"?>
    <bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="1.11.3">
      <bpmn:process id="Process_1" isExecutable="true">
        <bpmn:startEvent id="StartEvent_1" name="Work form ready to complete">
          <bpmn:outgoing>SequenceFlow_1o86rem</bpmn:outgoing>
        </bpmn:startEvent>
        <bpmn:sequenceFlow id="SequenceFlow_0qzj6sv" sourceRef="Task_1iudtxw" targetRef="ExclusiveGateway_1y41rel" />
        <bpmn:sequenceFlow id="SequenceFlow_19s5m6o" sourceRef="Task_1jm5ys9" targetRef="ExclusiveGateway_1y41rel" />
        <bpmn:sequenceFlow id="SequenceFlow_1o86rem" sourceRef="StartEvent_1" targetRef="ExclusiveGateway_0k8s142" />
        <bpmn:parallelGateway id="ExclusiveGateway_0k8s142">
          <bpmn:incoming>SequenceFlow_1o86rem</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_1b8plk7</bpmn:outgoing>
          <bpmn:outgoing>SequenceFlow_0jzdhyr</bpmn:outgoing>
        </bpmn:parallelGateway>
        <bpmn:sequenceFlow id="SequenceFlow_1b8plk7" sourceRef="ExclusiveGateway_0k8s142" targetRef="Task_1jm5ys9" />
        <bpmn:parallelGateway id="ExclusiveGateway_1y41rel">
          <bpmn:incoming>SequenceFlow_0qzj6sv</bpmn:incoming>
          <bpmn:incoming>SequenceFlow_19s5m6o</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_0p4gio9</bpmn:outgoing>
        </bpmn:parallelGateway>
        <bpmn:sequenceFlow id="SequenceFlow_0jzdhyr" sourceRef="ExclusiveGateway_0k8s142" targetRef="Task_1iudtxw" />
        <bpmn:userTask id="Task_1iudtxw" name="Log Hours" camunda:formKey="root">
          <bpmn:extensionElements>
            <camunda:formData>
              <camunda:formField id="hours" label="Number of Hours" type="string" />
            </camunda:formData>
          </bpmn:extensionElements>
          <bpmn:incoming>SequenceFlow_0jzdhyr</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_0qzj6sv</bpmn:outgoing>
        </bpmn:userTask>
        <bpmn:userTask id="Task_1jm5ys9" name="Approve" camunda:formKey="root">
          <bpmn:extensionElements>
            <camunda:formData>
              <camunda:formField id="approved" label="Approve" type="string" />
            </camunda:formData>
          </bpmn:extensionElements>
          <bpmn:incoming>SequenceFlow_1b8plk7</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_19s5m6o</bpmn:outgoing>
        </bpmn:userTask>
        <bpmn:exclusiveGateway id="ExclusiveGateway_14xefu8" default="SequenceFlow_0nz1wi4">
          <bpmn:incoming>SequenceFlow_0p4gio9</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_13o7154</bpmn:outgoing>
          <bpmn:outgoing>SequenceFlow_0nz1wi4</bpmn:outgoing>
        </bpmn:exclusiveGateway>
        <bpmn:sequenceFlow id="SequenceFlow_0p4gio9" sourceRef="ExclusiveGateway_1y41rel" targetRef="ExclusiveGateway_14xefu8" />
        <bpmn:sequenceFlow id="SequenceFlow_13o7154" name="Approved" sourceRef="ExclusiveGateway_14xefu8" targetRef="ExclusiveGateway_0p4h8bz">
          <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression"><![CDATA[Task_1jm5ys9.approved === 'Yes']]></bpmn:conditionExpression>
        </bpmn:sequenceFlow>
        <bpmn:sequenceFlow id="SequenceFlow_0nz1wi4" name="Not Approved" sourceRef="ExclusiveGateway_14xefu8" targetRef="Task_16c067e" />
        <bpmn:exclusiveGateway id="ExclusiveGateway_0p4h8bz">
          <bpmn:incoming>SequenceFlow_082yt1d</bpmn:incoming>
          <bpmn:incoming>SequenceFlow_13o7154</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_1aviop9</bpmn:outgoing>
        </bpmn:exclusiveGateway>
        <bpmn:sequenceFlow id="SequenceFlow_082yt1d" sourceRef="Task_16c067e" targetRef="ExclusiveGateway_0p4h8bz" />
        <bpmn:endEvent id="EndEvent_1iu9eq3">
          <bpmn:incoming>SequenceFlow_1aviop9</bpmn:incoming>
        </bpmn:endEvent>
        <bpmn:sequenceFlow id="SequenceFlow_1aviop9" sourceRef="ExclusiveGateway_0p4h8bz" targetRef="EndEvent_1iu9eq3" />
        <bpmn:userTask id="Task_16c067e" name="Ouch, try again">
          <bpmn:extensionElements>
            <camunda:formData>
              <camunda:formField id="confirm" label="Confirm you&#39;ve seen this" type="string" />
            </camunda:formData>
          </bpmn:extensionElements>
          <bpmn:incoming>SequenceFlow_0nz1wi4</bpmn:incoming>
          <bpmn:outgoing>SequenceFlow_082yt1d</bpmn:outgoing>
        </bpmn:userTask>
      </bpmn:process>
      <bpmndi:BPMNDiagram id="BPMNDiagram_1">
        <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
          <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
            <dc:Bounds x="173" y="102" width="36" height="36" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="151" y="138" width="82" height="24" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNEdge id="SequenceFlow_0qzj6sv_di" bpmnElement="SequenceFlow_0qzj6sv">
            <di:waypoint xsi:type="dc:Point" x="536" y="53" />
            <di:waypoint xsi:type="dc:Point" x="662" y="53" />
            <di:waypoint xsi:type="dc:Point" x="662" y="95" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="554" y="32" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_19s5m6o_di" bpmnElement="SequenceFlow_19s5m6o">
            <di:waypoint xsi:type="dc:Point" x="541" y="183" />
            <di:waypoint xsi:type="dc:Point" x="662" y="183" />
            <di:waypoint xsi:type="dc:Point" x="662" y="145" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="601.5" y="162" width="0" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_1o86rem_di" bpmnElement="SequenceFlow_1o86rem">
            <di:waypoint xsi:type="dc:Point" x="209" y="120" />
            <di:waypoint xsi:type="dc:Point" x="288" y="120" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="248.5" y="99" width="0" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNShape id="ParallelGateway_0j249ef_di" bpmnElement="ExclusiveGateway_0k8s142">
            <dc:Bounds x="288" y="95" width="50" height="50" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="312.6437177280551" y="149" width="0" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNEdge id="SequenceFlow_1b8plk7_di" bpmnElement="SequenceFlow_1b8plk7">
            <di:waypoint xsi:type="dc:Point" x="313" y="145" />
            <di:waypoint xsi:type="dc:Point" x="313" y="183" />
            <di:waypoint xsi:type="dc:Point" x="441" y="183" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="328" y="158" width="0" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNShape id="ParallelGateway_0cilaeg_di" bpmnElement="ExclusiveGateway_1y41rel">
            <dc:Bounds x="637" y="95" width="50" height="50" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="662" y="149" width="0" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNEdge id="SequenceFlow_0jzdhyr_di" bpmnElement="SequenceFlow_0jzdhyr">
            <di:waypoint xsi:type="dc:Point" x="313" y="95" />
            <di:waypoint xsi:type="dc:Point" x="313" y="53" />
            <di:waypoint xsi:type="dc:Point" x="436" y="53" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="283" y="68" width="90" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNShape id="UserTask_132zsow_di" bpmnElement="Task_1iudtxw">
            <dc:Bounds x="436" y="13" width="100" height="80" />
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape id="UserTask_02boexo_di" bpmnElement="Task_1jm5ys9">
            <dc:Bounds x="441" y="143" width="100" height="80" />
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape id="ExclusiveGateway_14xefu8_di" bpmnElement="ExclusiveGateway_14xefu8" isMarkerVisible="true">
            <dc:Bounds x="763" y="95" width="50" height="50" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="788" y="149" width="0" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNEdge id="SequenceFlow_0p4gio9_di" bpmnElement="SequenceFlow_0p4gio9">
            <di:waypoint xsi:type="dc:Point" x="687" y="120" />
            <di:waypoint xsi:type="dc:Point" x="763" y="120" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="725" y="99" width="0" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_13o7154_di" bpmnElement="SequenceFlow_13o7154">
            <di:waypoint xsi:type="dc:Point" x="788" y="95" />
            <di:waypoint xsi:type="dc:Point" x="788" y="56" />
            <di:waypoint xsi:type="dc:Point" x="1171" y="56" />
            <di:waypoint xsi:type="dc:Point" x="1171" y="95" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="712" y="87.71171171171171" width="48" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge id="SequenceFlow_0nz1wi4_di" bpmnElement="SequenceFlow_0nz1wi4">
            <di:waypoint xsi:type="dc:Point" x="788" y="145" />
            <di:waypoint xsi:type="dc:Point" x="788" y="183" />
            <di:waypoint xsi:type="dc:Point" x="927" y="183" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="808.2321428571429" y="159" width="68" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNShape id="ExclusiveGateway_0p4h8bz_di" bpmnElement="ExclusiveGateway_0p4h8bz" isMarkerVisible="true">
            <dc:Bounds x="1146" y="95" width="50" height="50" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="1171" y="149" width="0" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNEdge id="SequenceFlow_082yt1d_di" bpmnElement="SequenceFlow_082yt1d">
            <di:waypoint xsi:type="dc:Point" x="1027" y="183" />
            <di:waypoint xsi:type="dc:Point" x="1171" y="183" />
            <di:waypoint xsi:type="dc:Point" x="1171" y="145" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="1099" y="162" width="0" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNShape id="EndEvent_1iu9eq3_di" bpmnElement="EndEvent_1iu9eq3">
            <dc:Bounds x="1276" y="102" width="36" height="36" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="1294" y="142" width="0" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNEdge id="SequenceFlow_1aviop9_di" bpmnElement="SequenceFlow_1aviop9">
            <di:waypoint xsi:type="dc:Point" x="1196" y="120" />
            <di:waypoint xsi:type="dc:Point" x="1276" y="120" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="1236" y="99" width="0" height="12" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNShape id="UserTask_0eleu9f_di" bpmnElement="Task_16c067e">
            <dc:Bounds x="927" y="143" width="100" height="80" />
          </bpmndi:BPMNShape>
        </bpmndi:BPMNPlane>
      </bpmndi:BPMNDiagram>
    </bpmn:definitions>
    `,
  },
];
